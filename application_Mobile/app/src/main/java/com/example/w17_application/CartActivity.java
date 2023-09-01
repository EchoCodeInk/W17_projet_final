package com.example.w17_application;

import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import com.example.w17_application.entite.Cart;
import com.example.w17_application.manager.CartManager;

import java.util.ArrayList;

public class CartActivity extends AppCompatActivity {
    ScrollView scrollView;
    Context context;
    LinearLayout linearLayout;
    ImageButton btnDelete;
    TextView tvProductName, tvProductPrice, tvProductQuantity;

    ArrayList<Cart> itemsCart;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_cart);
        context = this;
        itemsCart = CartManager.getAll(context);
        scrollView = new ScrollView(this);

        linearLayout = new LinearLayout(context);
        linearLayout.setOrientation(LinearLayout.VERTICAL);

//        linearLayout.removeAllViews();
        for (Cart cart : itemsCart) {
            LinearLayout cartLayout = (LinearLayout) LayoutInflater.from(context).inflate(R.layout.single_row_design, null);
//            tvProductName = cartLayout.findViewById(R.id.cart_product_name);
            tvProductPrice = cartLayout.findViewById(R.id.cart_product_prix);
            tvProductQuantity = cartLayout.findViewById(R.id.cart_product_quantity);

            btnDelete = cartLayout.findViewById(R.id.delete_btn);
//            tvProductName.setText(cart.getCartId());
            tvProductPrice.setText(String.valueOf(cart.getProductPrice()));
            tvProductQuantity.setText(String.valueOf(cart.getProductQuantity()));

            btnDelete.setOnClickListener(v -> {
                CartManager.delete(this, cart.getProductId());
                linearLayout.removeView(cartLayout);
            });

            linearLayout.addView(cartLayout);
        }
        scrollView.addView(linearLayout);
        setContentView(scrollView);
    }




}
