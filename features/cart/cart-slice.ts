import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import useSWR from "swr";
import { SimpleDiscountType } from "../../models/simple-discount-type";
import TaxClass, {
  TaxClassA,
  TaxClassB,
  TaxClassC,
} from "../../models/tax-class";
import { fetcher } from "../../utils/fetch";

const cartAdapter = createEntityAdapter();

const initialState = cartAdapter.getInitialState({
  userId: -1,
  taxPercent: 0.0,
  serviceFeePercent: 0.0,
  deliveryTier1Fees: 0.0,
  deliveryTier2Fees: 0.0,
  deliveryTier3Fees: 0.0,
  deliveryTier1Range: 0.0,
  deliveryTier2Range: 0.0,
  deliveryTier3Range: 0.0,
  deliveryDistance: 0.0,
  minOrderValue: 0.0,
  pickupOnly: false,
  defaultTaxClass: {
    slug: "",
    percent: 0.0,
  },
  taxClassA: {
    slug: "",
    percent: 0.0,
  },
  taxClassB: {
    slug: "",
    percent: 0.0,
  },
  taxClassC: {
    slug: "",
    percent: 0.0,
  },
  chargeServiceFee: true,
  enableCashPayment: false,
  remarks: "",
  isSelfPickup: false,
  isDineIn: false,
  currency: "CURR",
  currencyIsoCode: "CUR",
  currencySymbol: "C",
  restaurantLocation: {
    lat: 0,
    lng: 0,
  },
  emptyCartImageUrl: "",
  customer: -1,
  itemSize: 0,
  discountDetails: {},
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOne: (state, action) => {
      let id = `${action.payload.id}`;

      const cartItemQuantity: number = Object.values(state.entities)
        .filter((item: any) => item.id === id)
        .reduce(
          (total: any, current: any) => total + current.quantity,
          0.0
        ) as number;

      const tax = calculateTax(state, action.payload);

      cartAdapter.upsertOne(state, {
        id,
        productId: action.payload.id,
        quantity: cartItemQuantity + 1,
        pricePerUnit: action.payload.price,
        addOns: [],
        taxA: tax.taxA,
        taxB: tax.taxB,
        taxC: tax.taxC,
      });

      saveCartToLocalStorage(state.entities);
    },
    
    removeOne: (state, action) => {
      const cartItemQuantity: number = Object.values(state.entities)
        .filter((item: any) => item.id === action.payload)
        .reduce(
          (total: any, current: any) => total + current.quantity,
          0.0
        ) as number;

      if (cartItemQuantity <= 1) {
        cartAdapter.removeOne(state, action.payload);
      } else {
        cartAdapter.upsertOne(state, {
          id: action.payload,
          quantity: cartItemQuantity - 1,
        });
      }

      saveCartToLocalStorage(state.entities);
    },
    deleteOne: (state, action) => {
      cartAdapter.removeOne(state, action.payload);

      saveCartToLocalStorage(state.entities);
    },
    addOneWithAddon: (state, action) => {
      const { item, addOns } = action.payload;

      let price = item.price;
      let tax = calculateTax(state, item);
      const allIds: number[] = [item.id];
      if (addOns && addOns.length > 0) {
        addOns.forEach((addOn: any) => {
          price += addOn.price;
          const addOnTax = calculateTax(state, addOn);
          tax.taxA += addOnTax.taxA;
          tax.taxB += addOnTax.taxB;
          tax.taxB += addOnTax.taxC;
          allIds.push(addOn.id);
        });
      }

      let id = getCombinedId(allIds);

      const cartItemQuantity: number = Object.values(state.entities)
        .filter((item: any) => item.id === id)
        .reduce(
          (total: any, current: any) => total + current.quantity,
          0.0
        ) as number;

      cartAdapter.upsertOne(state, {
        id: id,
        productId: item.id,
        quantity: cartItemQuantity + 1,
        pricePerUnit: price,
        addOns: [...addOns],
        taxA: tax.taxA,
        taxB: tax.taxB,
        taxC: tax.taxC,
      });

      saveCartToLocalStorage(state.entities);
    },
    updateAddOns: (state, action) => {
      const { id, item, addOns } = action.payload;

      let price = item.price;
      let tax = calculateTax(state, item);
      const allIds: any[] = [item.id];
      if (addOns && addOns.length > 0) {
        addOns.forEach((addOn: any) => {
          newId = newId + `_${addOn.id}`;
          price += addOn.price;
          const addOnTax = calculateTax(state, addOn);
          tax.taxA += addOnTax.taxA;
          tax.taxB += addOnTax.taxB;
          tax.taxB += addOnTax.taxC;

          allIds.push(addOn.id);
        });
      }

      let newId = getCombinedId(allIds);

      const oldQuantity: number = Object.values(state.entities)
        .filter((item: any) => item.id === id)
        .reduce(
          (total: any, current: any) => total + current.quantity,
          0.0
        ) as number;

      const newQuantity: number = Object.values(state.entities)
        .filter((item: any) => item.id === newId)
        .reduce(
          (total: any, current: any) => total + current.quantity,
          0.0
        ) as number;

      cartAdapter.removeOne(state, id);
      cartAdapter.upsertOne(state, {
        id: newId,
        productId: item.id,
        quantity: newQuantity + oldQuantity,
        pricePerUnit: price,
        addOns: [...addOns],
        taxA: tax.taxA,
        taxB: tax.taxB,
        taxC: tax.taxC,
      });

      saveCartToLocalStorage(state.entities);
    },
    incrementCartItemQuantity: (state, action) => {
      let id = action.payload;

      const cartItem: any[] = Object.values(state.entities).filter(
        (item: any) => item.id === id
      );

      if (!cartItem || cartItem.length != 1) return;

      cartAdapter.upsertOne(state, {
        ...cartItem[0],
        quantity: cartItem[0].quantity + 1,
      });

      saveCartToLocalStorage(state.entities);
    },
    clearCart: (state) => {
      cartAdapter.removeAll(state);
      localStorage.setItem("cart", "[]");
    },
    applyDiscount: (state, action) => {
      if (!action.payload) return;

      state.discountDetails = action.payload;
    },
    setDeliveryDistance: (state, action) => {
      state.deliveryDistance = action.payload;
    },
    setRemarks: (state, action) => {
      state.remarks = action.payload;
    },
    setSelfPickup: (state, action) => {
      state.isSelfPickup = action.payload;
    },
    setDineIn: (state, action) => {
      state.isDineIn = action.payload;
    },
    setItemSize: (state, action) => {
      state.itemSize = action.payload;
    },
    setCustomer: (state, action) => {
      state.customer = action.payload;
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(fetchSavedCart.fulfilled, (state, action) => {
        cartAdapter.addMany(state, action.payload);
      })
      .addCase(fetchTaxClasses.fulfilled, (state: any, action: any) => {
        if (!action.payload) return;

        const taxClasses = action.payload as TaxClass[];

        state.taxClassA = taxClasses.filter((a) => a.slug === TaxClassA)
          ? taxClasses.filter((a) => a.slug === TaxClassA)[0]
          : TaxClass.blank();
        state.taxClassB = taxClasses.filter((b) => b.slug === TaxClassB)
          ? taxClasses.filter((b) => b.slug === TaxClassB)[0]
          : TaxClass.blank();
        state.taxClassC = taxClasses.filter((c) => c.slug === TaxClassC)
          ? taxClasses.filter((c) => c.slug === TaxClassC)[0]
          : TaxClass.blank();
      })
      .addCase(fetchFeeSetting.fulfilled, (state: any, action: any) => {
        if (!action.payload) return;

        state.taxPercent = action.payload.taxPercent;
        state.serviceFeePercent = action.payload.serviceFeePercent;
        state.deliveryTier1Fees = action.payload.deliveryTier1Fees;
        state.deliveryTier2Fees = action.payload.deliveryTier2Fees;
        state.deliveryTier3Fees = action.payload.deliveryTier3Fees;
        state.deliveryTier1Range = action.payload.deliveryTier1Range;
        state.deliveryTier2Range = action.payload.deliveryTier2Range;
        state.deliveryTier3Range = action.payload.deliveryTier3Range;
        state.minOrderValue = action.payload.minOrderValue;
        state.pickupOnly = action.payload.pickupOnly;
        state.defaultTaxClass = action.payload.defaultTaxClass;
        state.chargeServiceFee = action.payload.chargeServiceFee;
        state.enableCashPayment = action.payload.enableCashPayment;
      })
      .addCase(
        fetchConfigurationSettings.fulfilled,
        (state: any, action: any) => {
          if (!action.payload) return;

          state.currency = action.payload.currency;
          state.currencyIsoCode = action.payload.currencyIsoCode;
          state.currencySymbol = action.payload.currencySymbol;
          state.restaurantLocation = action.payload.restaurantLocation;
        }
      )
      .addCase(fetchEmptyCartImage.fulfilled, (state, action) => {
        if (!action.payload) return;

        state.emptyCartImageUrl = action.payload[0].image.original;
      });
  },
});

export const {
  //deleteCart,
  addOne,
  removeOne,
  deleteOne,
  addOneWithAddon,
  updateAddOns,
  incrementCartItemQuantity,
  clearCart,
  applyDiscount,
  setDeliveryDistance,
  setRemarks,
  setSelfPickup,
  setDineIn,
  setCustomer,
  setItemSize,
} = cartSlice.actions;

export default cartSlice.reducer;

export const fetchSavedCart = createAsyncThunk(
  "cart/fetchSavedCart",
  async () => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : {};
  }
);

export const fetchTaxClasses = createAsyncThunk(
  "cart/fetchTaxClasses",
  async () => {
    const { data } = useSWR("/api/tax-classes", fetcher);
    return data;
  }
);

export const fetchFeeSetting = createAsyncThunk(
  "cart/fetchFeeSetting",
  async () => {
    const { data } = useSWR("/api/fee-settings", fetcher);
    return data;
  }
);

export const fetchConfigurationSettings = createAsyncThunk(
  "cart/fetchConfigurationSettings",
  async () => {
    const { data } = useSWR("/api/configuration-settings", fetcher);
    return data;
  }
);

export const fetchEmptyCartImage = createAsyncThunk(
  "cart/fetchEmptyCartImage",
  async () => {
    const { data } = useSWR(
      "/api/image-library?filters[key]=cartEmpty",
      fetcher
    );
    return data;
  }
);

export const { selectAll: selectAllCartItems } = cartAdapter.getSelectors(
  (state: any) => state.cart
);

export const selectCurrency = (state: any) => state.cart.currency;
export const selectCurrencyIsoCode = (state: any) => state.cart.currencyIsoCode;
export const selectCurrencySymbol = (state: any) => state.cart.currencySymbol;
export const selectRestaurantLocation = (state: any) =>
  state.cart.restaurantLocation;
export const selectEmptyCartImageUrl = (state: any) =>
  state.cart.emptyCartImageUrl;
export const selectIsSelfPickup = (state: any) =>
  state.cart.pickupOnly || state.cart.isSelfPickup;
export const selectItemSize = (state: any) => state.cart.itemSize;
export const selectRemarks = (state: any) => state.cart.remarks;
export const selectMaxDeliveryRange = (state: any) =>
  state.cart.deliveryTier3Range;
export const selectMinOrderValue = (state: any) => state.cart.minOrderValue;
export const selectPickupOnly = (state: any) => state.cart.pickupOnly;
export const selectIsDineIn = (state: any) => state.cart.isDineIn;
export const selectChargeServiceFee = (state: any) =>
  state.cart.chargeServiceFee;
export const selectEnableCashPayment = (state: any) =>
  state.cart.enableCashPayment;
export const selectTaxClasses = (state: any) => ({
  a: state.cart.taxClassA,
  b: state.cart.taxClassB,
  c: state.cart.taxClassC,
  default: state.cart.defaultTaxClass,
});

export const selectCartCount = createSelector(
  selectAllCartItems,
  (cartItems: any) => {
    if (!cartItems || cartItems.length == 0) return 0;

    return cartItems.reduce(
      (total: any, current: any) => total + current.quantity,
      0.0
    );
  }
);

export const selectCartTotals = createSelector(
  (state: any) => state.cart,
  selectAllCartItems,
  (state, cartItems: any) => {
    return calculateTotals(state, cartItems);
  }
);

export const selectOrder = createSelector(
  (state: any) => state.cart,
  selectAllCartItems,
  (cart, cartItems: any) => {
    const totals = calculateTotals(cart, cartItems);
    let order: any = {};
    order.subTotal = totals.subTotal;
    order.tax = totals.tax;
    order.serviceFee = totals.serviceFee;
    order.deliveryFees = totals.deliveryFees;
    order.deliveryFeeRange = totals.deliveryFeeRange;
    order.discount = totals.discount;
    order.total = totals.total;

    order.cartItems = [...cartItems];
    order.remarks = cart.remarks;
    order.isSelfPickup = cart.pickupOnly || cart.isSelfPickup;
    order.customer = cart.customer;

    return order;
  }
);

export const selectDiscountDetails = (state: any) => state.cart.discountDetails;

const saveCartToLocalStorage = (entities: any) => {
  let items: any[] = [];
  Object.values(entities).forEach((item: any) => {
    items.push({ ...item });
  });
  localStorage.setItem("cart", JSON.stringify(items));
};

const calculateSubTotal = (cartItems: any[]) => {
  return cartItems.reduce(
    (total: any, current: any) =>
      total + current.quantity * current.pricePerUnit,
    0.0
  );
};

const calculateTax = (state: any, product: any) => {
  const tax = { taxA: 0.0, taxB: 0.0, taxC: 0.0 };

  if (product.taxClasses.filter((x: any) => x.slug === TaxClassA).length) {
    tax.taxA =
      (product.price *
        product.taxClasses.filter((x: any) => x.slug === TaxClassA)[0]
          .percent) /
      100.0;
  } else if (
    product.taxClasses.filter((x: any) => x.slug === TaxClassB).length
  ) {
    tax.taxB =
      (product.price *
        product.taxClasses.filter((x: any) => x.slug === TaxClassB)[0]
          .percent) /
      100.0;
  } else if (
    product.taxClasses.filter((x: any) => x.slug === TaxClassC).length
  ) {
    tax.taxC =
      (product.price *
        product.taxClasses.filter((x: any) => x.slug === TaxClassC)[0]
          .percent) /
      100.0;
  } else {
    switch (state.defaultTaxClass.slug) {
      case TaxClassA:
        tax.taxA = (product.price * state.defaultTaxClass.percent) / 100.0;
        break;
      case TaxClassB:
        tax.taxB = (product.price * state.defaultTaxClass.percent) / 100.0;
        break;
      case TaxClassC:
        tax.taxC = (product.price * state.defaultTaxClass.percent) / 100.0;
        break;
    }
  }

  return tax;
};

const calculateTaxATotal = (cartItems: any[]) => {
  return cartItems.reduce(
    (total: any, current: any) => total + current.taxA * current.quantity,
    0.0
  );
};

const calculateTaxBTotal = (cartItems: any[]) => {
  return cartItems.reduce(
    (total: any, current: any) => total + current.taxB * current.quantity,
    0.0
  );
};

const calculateTaxCTotal = (cartItems: any[]) => {
  return cartItems.reduce(
    (total: any, current: any) => total + current.taxC * current.quantity,
    0.0
  );
};

const calculateFraction = (sum: number, fractionPercent: number) => {
  return (fractionPercent / 100.0) * sum;
};

const calculateDiscount = (
  discountableAmount: number,
  discountDetails: any
) => {
  if (!discountDetails || discountableAmount < discountDetails.minPurchase) {
    return 0.0;
  }

  if (discountDetails.discountType === SimpleDiscountType.Percentage) {
    const discount = calculateFraction(
      discountableAmount,
      discountDetails.discount
    );
    return discountDetails.maxDiscount == 0
      ? discount
      : discount > discountDetails.maxDiscount
      ? discountDetails.maxDiscount
      : discount;
  }

  if (discountDetails.discountType === SimpleDiscountType.Amount) {
    return discountableAmount < discountDetails.discount
      ? discountableAmount
      : discountDetails.discount;
  }

  return 0.0;
};

const calculateDeliveryFee = (
  feeTiers: { tierFee: number; tierRange: number }[],
  rangeValue: number,
  state: any
) => {
  let deliveryFee = { range: 0.0, fee: 0.0, deliveryServiceFee: 0 };
  if (!feeTiers) return deliveryFee;
  if (state.isSelfPickup || state.pickupOnly) return deliveryFee;

  let tierStartRange = 0.0;
  feeTiers.forEach((feeTier: any) => {
    if (rangeValue > tierStartRange && rangeValue <= feeTier.tierRange) {
      deliveryFee.range = feeTier.tierRange;
      deliveryFee.fee = feeTier.tierFee;
      deliveryFee.deliveryServiceFee = calculateFraction(
        deliveryFee.fee,
        state.serviceFeePercent
      );
      tierStartRange = feeTier.tierRange;
    }
  });

  return deliveryFee;
};

const calculateTotals = (state: any, cartItems: any) => {
  if (!cartItems || cartItems.length == 0)
    return {
      subTotal: 0.0,
      tax: 0.0,
      taxA: 0.0,
      taxB: 0.0,
      taxC: 0.0,
      serviceFee: 0.0,
      deliveryFees: 0.0,
      deliveryFeeRange: 0.0,
      discount: 0.0,
      total: 0.0,
    };

  const subTotal: number = calculateSubTotal(cartItems);
  const discount: number = calculateDiscount(subTotal, state.discountDetails);
  const taxA = calculateTaxATotal(cartItems);
  const taxB = calculateTaxBTotal(cartItems);
  const taxC = calculateTaxCTotal(cartItems);

  const tax: number = taxA + taxB + taxC;
  const deliveryFees: any = calculateDeliveryFee(
    [
      {
        tierFee: state.deliveryTier1Fees,
        tierRange: state.deliveryTier1Range,
      },
      {
        tierFee: state.deliveryTier2Fees,
        tierRange: state.deliveryTier2Range,
      },
      {
        tierFee: state.deliveryTier3Fees,
        tierRange: state.deliveryTier3Range,
      },
    ],
    state.deliveryDistance,
    state
  );
  const serviceFee: number =
    calculateFraction(subTotal, state.serviceFeePercent) +
    (deliveryFees ? deliveryFees.deliveryServiceFee : 0.0);

  return {
    subTotal,
    tax,
    taxA,
    taxB,
    taxC,
    serviceFee,
    deliveryFees: deliveryFees ? deliveryFees.fee : 0.0,
    deliveryFeeRange: deliveryFees ? deliveryFees.range : -1,
    discount,
    total:
      subTotal +
      (state.chargeServiceFee ? serviceFee : 0.0) +
      (deliveryFees ? deliveryFees.fee : 0.0) -
      discount,
  };
};

const getCombinedId = (allIds: number[]) => {
  let id = "";
  allIds.sort().forEach((subId: any) => {
    id += `${subId}_`;
  });

  return id.length > 0 ? id.substring(0, id.length - 1) : id;
};
