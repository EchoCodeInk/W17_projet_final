package com.example.w17_application;

import android.content.Context;
import android.os.Bundle;
import android.widget.GridView;
import android.widget.ListView;

import androidx.appcompat.app.AppCompatActivity;

import com.example.w17_application.adapter.ProductAdapter;
import com.example.w17_application.entite.Product;
import com.example.w17_application.manager.ProductManager;

import java.util.ArrayList;

public class ProductActivity extends AppCompatActivity {

    GridView gridViewMain;
    ProductAdapter productAdapter;
    Context context;
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_product);
        context = this;
        gridViewMain = findViewById(R.id.list_view_products);
        ArrayList<Product> products = ProductManager.getAll(this);
        productAdapter = new ProductAdapter(this, R.layout.product_layout, products);
        gridViewMain.setAdapter(productAdapter);
    }
}