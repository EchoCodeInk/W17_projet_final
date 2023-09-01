package com.example.w17_application.entite;

import android.database.Cursor;

import java.util.List;

public class Cart {
    private int productId;
    private int cartId;
    private int productQuantity;
    private int productPrice;

    public Cart() {
    }

    public Cart(int productId,int cartId, int productQuantity, int productPrice) {
        this.productId = productId;
        this.cartId = cartId;
        this.productQuantity = productQuantity;
        this.productPrice = productPrice;
    }

    public Cart(Cursor cursor) {
        this.productId = cursor.getInt(cursor.getColumnIndexOrThrow("produit_id"));
        this.cartId = cursor.getInt(cursor.getColumnIndexOrThrow("panier_id"));
        this.productQuantity = cursor.getInt(cursor.getColumnIndexOrThrow("quantity"));
        this.productPrice = cursor.getInt(cursor.getColumnIndexOrThrow("prix"));
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public int getCartId() {
        return cartId;
    }

    public void setCartId(int cartId) {
        this.cartId = cartId;
    }

    public int getProductQuantity() {
        return productQuantity;
    }

    public void setProductQuantity(int productQuantity) {
        this.productQuantity = productQuantity;
    }

    public int getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(int productPrice) {
        this.productPrice = productPrice;
    }
}
