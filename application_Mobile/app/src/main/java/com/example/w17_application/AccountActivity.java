package com.example.w17_application;

import android.content.Intent;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.PopupMenu;
import android.widget.Spinner;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

public class AccountActivity extends AppCompatActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_account);

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
            Intent intent = new Intent(AccountActivity.this, CartActivity.class);
            startActivity(intent);
        });

        ImageView profile = customActionBar.findViewById(R.id.ProfilePic);
        Drawable profileDrawable = ContextCompat.getDrawable(this, R.drawable.no_user);
        profile.setImageDrawable(profileDrawable);
        profile.setOnClickListener(v -> {
            Intent intent = new Intent(AccountActivity.this, AccountActivity.class);
            startActivity(intent);
        });

        TextView title = customActionBar.findViewById(R.id.TitleOfPage);
        title.setText("The Sac Team - Home");

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

        //Recup info
        EditText email = findViewById(R.id.email);
        EditText password = findViewById(R.id.password);
        Button connect = findViewById(R.id.connection);
        connect.setOnClickListener(v -> {

        });

        TextView inscription = findViewById(R.id.inscription);
        inscription.setOnClickListener(v -> {

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
                    Intent intent = new Intent(AccountActivity.this, MainActivity.class);
                    startActivity(intent);
                    return true;
                } else if (itemId == R.id.menu_product) {
                    Intent intent = new Intent(AccountActivity.this, ProductActivity.class);
                    startActivity(intent);
                    return true;
                } else if (itemId == R.id.menu_account) {
                    Intent intent = new Intent(AccountActivity.this, AccountActivity.class);
                    startActivity(intent);
                    return true;
                } else if (itemId == R.id.menu_cart) {
                    Intent intent = new Intent(AccountActivity.this, CartActivity.class);
                    startActivity(intent);
                    return true;
                }
                return false;
            }
        });

        popupMenu.show();
    }

}
