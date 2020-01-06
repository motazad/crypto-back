"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLUMN_NAME = {
    OPEN_ORDER: {
        id: "id",
        updatedAt: "updated_at",
        created_at: "created_at",
        status: "status",
        user: "user_id",
        price_copy: "price_copy_id",
        dateTime: "date_time",
        order_type: "order_type",
        pair: "pair",
        size: "size",
        leverage: "leverage",
        margin: "margin",
        side: "side",
        entry_price: "entry_price",
        limit_price: "limit_price",
        stop_price: "stop_price",
        exit_price: "exit_price",
    },
    OPEN_POSITION: {
        id: "id",
        createdAt: "created_at",
        updatedAt: "updated_at",
        status: "status",
        user: "user_id",
        order: "order_id",
        dateTime: "date_time",
        pair: "pair",
        size: "size",
        side: "side",
        entry_price: "entry_price",
        exit_price: "exit_price",
        liquidation_price: "liquidation_price",
        leverage: "leverage",
        margin: "margin",
        stop_price: "stop_price",
        price_copy: "price_copy",
        profit: "profit"
    },
    POSITION_HISTORY: {
        id: "id",
        createdAt: "created_at",
        updatedAt: "updated_at",
        status: "status",
        user: "user_id",
        order: "order_id",
        dateTime: "date_time",
        pair: "pair",
        size: "size",
        side: "side",
        entry_price: "entry_price",
        exit_price: "exit_price",
        liquidation_price: "liquidation_price",
        leverage: "leverage",
        stop_price: "stop_price",
        margin: "margin",
        price_copy: "price_copy",
        profit: "profit"
    },
    PRICE: {
        id: "id",
        createdAt: "created_at",
        updatedAt: "updated_at",
        symbol: "symbol",
        timestamp: "timestamp",
        price: "price",
        _tradeCopy: "trade_copy",
        openPosition: "open_position",
        openOrder: "open_order",
    },
    USER: {
        id: "id",
        createdAt: "created_at",
        updatedAt: "updated_at",
        firstName: "first_name",
        lastName: "last_name",
        username: "username",
        email: "email",
        country: "country",
        photo: "photo",
        auth: "auth"
    },
    DEPOSIT: {
        id: "id",
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        user: "user",
        btc_ammount: "btc_ammount",
        btc_address: "btc_address"
    }
};
//# sourceMappingURL=columnNames.js.map