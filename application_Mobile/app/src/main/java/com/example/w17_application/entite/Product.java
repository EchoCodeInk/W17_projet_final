package com.example.w17_application.entite;

import android.database.Cursor;

public class Product {

    private int id;
    private String name;
    private String description;
    private int price;
    private String category;
    private String imageUrl;


    public Product() {
    }

    public Product(Cursor cursor) {
        this.id = cursor.getInt(cursor.getColumnIndexOrThrow("id"));
        this.name = cursor.getString(cursor.getColumnIndexOrThrow("nom"));
        this.description = cursor.getString(cursor.getColumnIndexOrThrow("description"));
        this.category = cursor.getString(cursor.getColumnIndexOrThrow("categorie"));
        this.price = cursor.getInt(cursor.getColumnIndexOrThrow("prix"));
        String imgUrl = cursor.getString(cursor.getColumnIndexOrThrow("image_url"));
        this.imageUrl = imgUrl.substring(15);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
