package com.example.w17_application;

import android.content.Context;
import android.content.Intent;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.GridView;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.PopupMenu;
import android.widget.Spinner;
import android.widget.TextView;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

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

        // ACTION BAR
        View customActionBar = getLayoutInflater().inflate(R.layout.custom_action_bar, null);
        ActionBar.LayoutParams layoutParams = new ActionBar.LayoutParams(ActionBar.LayoutParams.MATCH_PARENT, ActionBar.LayoutParams.MATCH_PARENT);
        getSupportActionBar().setDisplayOptions(ActionBar.DISPLAY_SHOW_CUSTOM);
        getSupportActionBar().setCustomView(customActionBar, layoutParams);
        getSupportActionBar().setDisplayShowTitleEnabled(false);

        ImageView cart = customActionBar.findViewById(R.id.CartImg);
        Drawable cartDrawable = ContextCompat.getDrawable(this, R.drawable.yellow_shopping_cart);
        cart.setImageDrawable(cartDrawable);
        cart.setOnClickListener(v -> {
            Intent intent = new Intent(ProductActivity.this, CartActivity.class);
            startActivity(intent);
        });

        ImageView profile = customActionBar.findViewById(R.id.ProfilePic);
        Drawable profileDrawable = ContextCompat.getDrawable(this, R.drawable.no_user);
        profile.setImageDrawable(profileDrawable);
        profile.setOnClickListener(v -> {
            Intent intent = new Intent(ProductActivity.this, AccountActivity.class);
            startActivity(intent);
        });

        TextView title = customActionBar.findViewById(R.id.TitleOfPage);
        title.setText("The Sac Team - Products");

        //NAV BAR
        ImageView burgerMenu = findViewById(R.id.BurgerMenu);
        Drawable burgerMenuDrawable = ContextCompat.getDrawable(this, R.drawable.burger_menu_light);
        burgerMenu.setImageDrawable(burgerMenuDrawable);

        Spinner burgerSpinnerPopUp = findViewById(R.id.burgerSpinnerPopUp);

        burgerMenu.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                showPopupMenu(view);
            }
        });

        context = this;
        gridViewMain = findViewById(R.id.list_view_products);
        ArrayList<Product> products = ProductManager.getAll(this);
        productAdapter = new ProductAdapter(this, R.layout.product_layout, products);
        gridViewMain.setAdapter(productAdapter);

        gridViewMain.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Product product = (Product) parent.getItemAtPosition(position);
                Intent intent = new Intent(context, DetailsActivity.class);
                intent.putExtra("id", product.getId());
                startActivity(intent);
            }
        });

    }

    private void showPopupMenu(View view) {
        PopupMenu popupMenu = new PopupMenu(this, view);
        MenuInflater inflater = popupMenu.getMenuInflater();
        inflater.inflate(R.menu.menu_image_popup, popupMenu.getMenu());

        popupMenu.setOnMenuItemClickListener(new PopupMenu.OnMenuItemClickListener() {
            @Override
            public boolean onMenuItemClick(MenuItem item) {
                int itemId = item.getItemId();

                if (itemId == R.id.menu_home) {
                    Intent intent = new Intent(ProductActivity.this, MainActivity.class);
                    startActivity(intent);
                    return true;
                } else if (itemId == R.id.menu_product) {
                    Intent intent = new Intent(ProductActivity.this, ProductActivity.class);
                    startActivity(intent);
                    return true;
                } else if (itemId == R.id.menu_account) {
                    Intent intent = new Intent(ProductActivity.this, AccountActivity.class);
                    startActivity(intent);
                    return true;
                } else if (itemId == R.id.menu_cart) {
                    Intent intent = new Intent(ProductActivity.this, CartActivity.class);
                    startActivity(intent);
                    return true;
                }
                return false;
            }
        });

        popupMenu.show();
    }

}