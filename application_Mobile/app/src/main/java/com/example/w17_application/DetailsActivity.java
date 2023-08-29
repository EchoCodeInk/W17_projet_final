package com.example.w17_application;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

import com.example.w17_application.entite.Product;
import com.example.w17_application.manager.ProductManager;

public class DetailsActivity extends AppCompatActivity {
    Context context;
    TextView tvProductDetailName;
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detail);

        Intent intent = getIntent();
        int idValue = intent.getIntExtra("id", -1);
        Product product = ProductManager.getById(this, idValue);
        context = this;
        tvProductDetailName = findViewById(R.id.tv_product_detail_name);
        tvProductDetailName.setText(product.getName());
    }
}
