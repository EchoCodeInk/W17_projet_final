package com.example.w17_application;

import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

import android.content.Intent;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toolbar;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

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
            Intent intent = new Intent(MainActivity.this, CartActivity.class);
            startActivity(intent);
        });

        ImageView profile = customActionBar.findViewById(R.id.ProfilePic);
        Drawable profileDrawable = ContextCompat.getDrawable(this, R.drawable.no_user);
        profile.setImageDrawable(profileDrawable);
        profile.setOnClickListener(v -> {
            Intent intent = new Intent(MainActivity.this, AccountActivity.class);
            startActivity(intent);
        });

        TextView title = customActionBar.findViewById(R.id.TitleOfPage);
        title.setText("The Sac Team - Home");

        //NAV BAR
        ImageView burgerMenu = findViewById(R.id.BurgerMenu);
        Drawable burgerMenuDrawable = ContextCompat.getDrawable(this, R.drawable.burger_menu_light);
        burgerMenu.setImageDrawable(burgerMenuDrawable);

        ImageView searchImg = findViewById(R.id.imgSearch);
        Drawable searchImgDrawable = ContextCompat.getDrawable(this, R.drawable.search);
        searchImg.setImageDrawable(searchImgDrawable);
    }
}