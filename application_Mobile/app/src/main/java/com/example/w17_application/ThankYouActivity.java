package com.example.w17_application;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.widget.TextView;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

public class ThankYouActivity extends AppCompatActivity {

    private TextView orderNumber, orderDate;

    public static String genererNumeroCommande() {
        String chiffresPossibles = "0123456789";
        int longueurNumero = 8;

        Random random = new Random();
        StringBuilder numeroCommande = new StringBuilder();

        for (int i = 0; i < longueurNumero; i++) {
            int index = random.nextInt(chiffresPossibles.length());
            char chiffreAleatoire = chiffresPossibles.charAt(index);
            numeroCommande.append(chiffreAleatoire);
        }

        return numeroCommande.toString();
    }

    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_thank_you);
        Date maintenant = new Date();
        SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
        String dateEtHeure = format.format(maintenant);


        orderNumber = findViewById(R.id.order_number);
        orderDate = findViewById(R.id.order_date);

        orderNumber.setText("Your Order: #" + genererNumeroCommande());
        orderDate.setText("Order Date: " + dateEtHeure);
    }
}