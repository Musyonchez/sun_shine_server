import { MongoClient } from "mongodb";

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb+srv://musyonchez:ukuruM20@pharmacy.afxy7cz.mongodb.net/sun_shine?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    // Get the database and collection on which to run the operation
    const database = client.db("sun_shine");
    const products = database.collection("products");

    // Create an array of documents to insert
    const docs = [
        {
          productName: "Paracetamol",
          description: "Pain and fever relief",
          category: "Medicine",
          price: 5.99,
          stock: 100,
        },
        {
          productName: "Bandages",
          description: "First aid bandages",
          category: "Medical Supplies",
          price: 3.49,
          stock: 50,
        },
        {
          productName: "Aspirin",
          description: "Pain relief",
          category: "Medicine",
          price: 4.99,
          stock: 80,
        },
        {
          productName: "Antibiotic Ointment",
          description: "Topical antibiotic cream",
          category: "Medical Supplies",
          price: 6.99,
          stock: 30,
        },
        {
          productName: "Cough Syrup",
          description: "Relieves cough and cold symptoms",
          category: "Medicine",
          price: 7.49,
          stock: 60,
        },
        {
          productName: "Adhesive Bandages",
          description: "Assorted sizes of adhesive bandages",
          category: "Medical Supplies",
          price: 2.99,
          stock: 70,
        },
        {
          productName: "Vitamin C Tablets",
          description: "Immune system support",
          category: "Supplements",
          price: 8.99,
          stock: 40,
        },
        {
          productName: "Thermometer",
          description: "Digital thermometer",
          category: "Medical Supplies",
          price: 12.99,
          stock: 20,
        },
        {
          productName: "Ibuprofen",
          description: "Pain and inflammation relief",
          category: "Medicine",
          price: 6.49,
          stock: 90,
        },
        {
          productName: "Burn Ointment",
          description: "First aid for burns",
          category: "Medical Supplies",
          price: 5.49,
          stock: 25,
        },
        {
            productName: "Allergy Medication",
            description: "Relief for allergy symptoms",
            category: "Medicine",
            price: 9.99,
            stock: 35,
          },
          {
            productName: "Disposable Gloves",
            description: "Latex-free disposable gloves",
            category: "Medical Supplies",
            price: 4.49,
            stock: 60,
          },
          {
            productName: "Eye Drops",
            description: "Relieves dry and irritated eyes",
            category: "Medicine",
            price: 3.99,
            stock: 45,
          },
          {
            productName: "Ace Bandage",
            description: "Elastic bandage for support",
            category: "Medical Supplies",
            price: 7.99,
            stock: 30,
          },
          {
            productName: "Multivitamin Tablets",
            description: "Essential vitamins and minerals",
            category: "Supplements",
            price: 11.99,
            stock: 50,
          },
          {
            productName: "Antiseptic Wipes",
            description: "Disinfectant wipes for wounds",
            category: "Medical Supplies",
            price: 5.79,
            stock: 40,
          },
          {
            productName: "Nasal Decongestant",
            description: "Relieves nasal congestion",
            category: "Medicine",
            price: 6.99,
            stock: 25,
          },
          {
            productName: "Cotton Swabs",
            description: "Cotton-tipped swabs for hygiene",
            category: "Medical Supplies",
            price: 2.49,
            stock: 75,
          },
          {
            productName: "Pain Relief Patch",
            description: "Topical patch for localized pain relief",
            category: "Medicine",
            price: 8.49,
            stock: 20,
          },
          {
            productName: "Digital Thermometer",
            description: "Accurate digital temperature measurement",
            category: "Medical Equipment",
            price: 12.99,
            stock: 15,
          },
          {
            productName: "Cough Syrup",
            description: "Relieves cough and throat irritation",
            category: "Medicine",
            price: 7.49,
            stock: 30,
          },
          {
            productName: "First Aid Kit",
            description: "Comprehensive first aid essentials",
            category: "Medical Supplies",
            price: 19.99,
            stock: 10,
          },
          {
            productName: "Sunscreen Lotion",
            description: "Protects against harmful UV rays",
            category: "Personal Care",
            price: 15.49,
            stock: 25,
          },
          {
            productName: "Orthopedic Pillow",
            description: "Supportive pillow for neck and spine",
            category: "Medical Equipment",
            price: 24.99,
            stock: 8,
          },
          {
            productName: "Blood Pressure Monitor",
            description: "Measures blood pressure accurately",
            category: "Medical Equipment",
            price: 29.99,
            stock: 12,
          },
          {
            productName: "Hydrogen Peroxide",
            description: "Antiseptic solution for wound cleaning",
            category: "Medical Supplies",
            price: 3.99,
            stock: 40,
          },
          {
            productName: "Dental Floss",
            description: "Floss for oral hygiene",
            category: "Personal Care",
            price: 1.99,
            stock: 60,
          },
          {
            productName: "Anti-Inflammatory Cream",
            description: "Reduces inflammation and pain",
            category: "Medicine",
            price: 6.49,
            stock: 18,
          },
          {
            productName: "Omega-3 Fish Oil Capsules",
            description: "Rich in omega-3 fatty acids",
            category: "Supplements",
            price: 14.99,
            stock: 22,
          },
      ];
      

    // Prevent additional documents from being inserted if one fails
    const options = { ordered: true };

    // Execute insert operation
    const result = await products.insertMany(docs, options);

    // Print result
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
