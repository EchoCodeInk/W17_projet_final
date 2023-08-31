package com.example.w17_application;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.example.w17_application.entite.Product;
import com.example.w17_application.manager.ProductManager;

import java.text.DecimalFormat;

public class PaymentActivity extends AppCompatActivity {
    private TextView paymentProductName, paymentProductPrice, paymentProductQuantity, subtotalHT, TVQ, TPS, totalTTC;
    private Button payButton;
    private EditText etFirstName, etLastName, etCardNumber, etExpiryDate, etCvv;

    Context context;
    Intent intent;
    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_payment);
        Intent intent = getIntent();
        int idValue = intent.getIntExtra("id", -1);
        String quantityValue = intent.getStringExtra("quantity");
        Product product = ProductManager.getById(context, idValue);
        DecimalFormat decimalFormat = new DecimalFormat("#0.00");

        context = this;
        paymentProductName = findViewById(R.id.payment_product_name);
        paymentProductPrice = findViewById(R.id.payment_product_price);
        paymentProductQuantity = findViewById(R.id.payment_product_quantity);
        subtotalHT = findViewById(R.id.sous_total_ht);
        TVQ = findViewById(R.id.tvq);
        TPS = findViewById(R.id.tps);
        totalTTC = findViewById(R.id.total_ttc);
        payButton = findViewById(R.id.payButton);
        etFirstName = findViewById(R.id.firstNameEditText);
        etLastName = findViewById(R.id.lastNameEditText);
        etCardNumber = findViewById(R.id.cardNumberEditText);
        etExpiryDate = findViewById(R.id.expiryDateEditText);
        etCvv = findViewById(R.id.cvvEditText);


        double priceHT = product.getPrice() * Integer.parseInt(quantityValue);
        double priceTVQ = priceHT * 0.09975;
        double priceTPS = priceHT * 0.05;
        double priceTTC = priceHT + priceTVQ + priceTPS;

        paymentProductName.setText(product.getName());
        paymentProductPrice.setText(String.valueOf(product.getPrice()) + "$");
        paymentProductQuantity.setText(quantityValue);
        subtotalHT.setText("Subtotal (HT)     " + decimalFormat.format(priceHT) + "$");
        TVQ.setText("TVQ     " + decimalFormat.format(priceTVQ) + "$");
        TPS.setText("TPS     " + decimalFormat.format(priceTPS) + "$");
        totalTTC.setText("Total TTC     " + decimalFormat.format(priceTTC) + "$");

        payButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (!etFirstName.getText().toString().isEmpty() && !etLastName.getText().toString().isEmpty() && !etCardNumber.getText().toString().isEmpty() && !etExpiryDate.getText().toString().isEmpty() && !etCvv.getText().toString().isEmpty()) {
                    Intent intent = new Intent(context, ThankYouActivity.class);
                    finish();
                    startActivity(intent);

                } else {
                    Toast.makeText(context, "Please fill out all the required fields before proceeding. ", Toast.LENGTH_SHORT).show();

                }
            }
        });


    }
}