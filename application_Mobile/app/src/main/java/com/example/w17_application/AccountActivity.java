package com.example.w17_application;

import android.content.Context;
import android.content.Intent;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.PopupMenu;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

import com.example.w17_application.entite.User;
import com.example.w17_application.manager.UserManager;

public class AccountActivity extends AppCompatActivity {

    Context context;
    UserManager userManager = new UserManager();

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_account);

        context = this;

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
            if (!email.getText().toString().isEmpty() && !password.getText().toString().isEmpty()) {
                User user = userManager.getByEmailNPass(context,email.getText().toString(),password.getText().toString());
                if (user == null) {
                    Toast.makeText(context, "Mauvais mot de passe ou courriel", Toast.LENGTH_SHORT).show();
                } else {
                    LinearLayout pageLogin = findViewById(R.id.pageUser);
                    pageLogin.setVisibility(View.GONE);
                    LinearLayout pageUserLoggedIn = findViewById(R.id.pageUserLoggedIn);
                    pageUserLoggedIn.setVisibility(View.VISIBLE);

                    EditText loggedName = findViewById(R.id.inputNameUser);
                    loggedName.setText(user.getNom());
                    EditText loggedEmail = findViewById(R.id.inputEmailUser);
                    loggedEmail.setText(user.getEmail());
                    EditText loggedPass = findViewById(R.id.inputPasswordUser);
                    loggedPass.setText(user.getPassword());
                    EditText loggedImgName = findViewById(R.id.inputImgUser);
                    loggedImgName.setText(user.getImage_profil());

                    Button btnSave = findViewById(R.id.saveBtn);
                    btnSave.setOnClickListener(v1 -> {
                        if (loggedName.getText().toString().isEmpty() || loggedEmail.getText().toString().isEmpty() || loggedPass.getText().toString().isEmpty() || loggedImgName.getText().toString().isEmpty()) {
                            Toast.makeText(context, "Veuiller Remplir les case", Toast.LENGTH_SHORT).show();
                        } else {
                            User updateUser = new User();
                            updateUser.setId(user.getId());
                            updateUser.setNom(loggedName.getText().toString());
                            updateUser.setEmail(loggedEmail.getText().toString());
                            updateUser.setPassword(loggedPass.getText().toString());
                            updateUser.setImage_profil(loggedImgName.getText().toString());
                            userManager.updateUser(context,updateUser);
                        }
                    });

                    Button btnDelete = findViewById(R.id.deleteBtn);
                    btnDelete.setOnClickListener(v1 -> {
                        AlertDialog.Builder builder = new AlertDialog.Builder(this);
                        builder.setTitle("Are you sure?");
                        builder.setPositiveButton("Yes", (dialog, which) -> {

                            userManager.delete(context, user.getId());

                            dialog.dismiss();

                            Intent intentToMain = new Intent(AccountActivity.this, MainActivity.class);
                            finish();
                            startActivity(intentToMain);
                        });

                        builder.setNegativeButton("No", (dialog, which) -> {
                        });
                        AlertDialog alertDialog = builder.create();
                        alertDialog.show();
                    });
                }
            } else {
                Toast.makeText(context, "Veuiller Remplir les case", Toast.LENGTH_SHORT).show();
            }
        });

        TextView inscription = findViewById(R.id.inscription);
        inscription.setOnClickListener(v -> {
            View dialogView = getLayoutInflater().inflate(R.layout.new_user_input_alert, null);

            EditText editTextName = dialogView.findViewById(R.id.inputNameUser);
            EditText editTextEmail = dialogView.findViewById(R.id.inputEmailUser);
            EditText editTextPassword = dialogView.findViewById(R.id.inputPasswordUser);
            EditText editTextImgUser = dialogView.findViewById(R.id.inputImgUser);

            AlertDialog.Builder builder = new AlertDialog.Builder(this);
            builder.setTitle("New User");
            builder.setMessage("Fill out info :");
            builder.setView(dialogView);
            builder.setPositiveButton("OK", (dialog, which) -> {
                String nameUser = editTextName.getText().toString();
                String emailUser = editTextEmail.getText().toString();
                String passwordUser = editTextPassword.getText().toString();
                String imgUser = editTextImgUser.getText().toString();

                if (!nameUser.isEmpty() && !emailUser.isEmpty() && !passwordUser.isEmpty() && !imgUser.isEmpty()) {
                    createUserAndRefresh(nameUser, emailUser, passwordUser,imgUser);
                    Toast.makeText(context, "succès", Toast.LENGTH_SHORT).show();
                } else {
                    Toast.makeText(context, "Veuiller Remplir toute les case", Toast.LENGTH_SHORT).show();
                }
            });
            builder.setNegativeButton("Cancel", (dialog, which) -> {});
            AlertDialog alertDialog = builder.create();
            alertDialog.show();
        });
    }

    private void createUserAndRefresh(String name, String email, String password, String userImg) {
        User newUser = new User();
        newUser.setNom(name);
        newUser.setEmail(email);
        newUser.setPassword(password);
        newUser.setImage_profil(userImg);

        userManager.AddUser(context, newUser);

        Intent intent = getIntent();
        finish();
        startActivity(intent);
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
