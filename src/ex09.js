window.addEventListener("load", (event) => {
    document.querySelector('#idActionBP1').addEventListener('click', actionBP1);
});

// ---------------------------------------------------------------------------

function afficherObjet(resultat) {
    const container = document.getElementById("output");
    container.innerHTML = JSON.stringify(resultat, null, 3);
}

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// -----------------------------------------------------------------------------
//
//               )        (                 ) (           (         (
//            ( /(   *   ))\ )        (  ( /( )\ )        )\ )  (   )\ )
//      (   ( )\())` )  /(()/((       )\ )\()|()/(  (    (()/(  )\ (()/(
//      )\  )((_)\  ( )(_))(_))\    (((_|(_)\ /(_)) )\    /(_)|((_) /(_))
//     ((_)((_)((_)(_(_()|_))((_)   )\___ ((_|_))_ ((_)  (_)) )\___(_))
//     __   _____ _____ ___ ___    ___ ___  ___  ___   ___ ___ ___   _
//     \ \ / / _ \_   _| _ \ __|  / __/ _ \|   \| __| |_ _/ __|_ _| | |
//      \ V / (_) || | |   / _|  | (_| (_) | |) | _|   | | (__ | |  |_|
//       \_/ \___/ |_| |_|_\___|  \___\___/|___/|___| |___\___|___| (_)
//
// ----------------------------------------------------------------------------



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

function actionBP1() {

    const queries = [
        // "SELECT * FROM pizzas;",
        new SQLQueryBuilder().from("pizzas").build(),

        // "SELECT name, size, price FROM pizzas WHERE price > 20 AND price <= 30 ORDER BY price desc LIMIT 5;",
        new SQLQueryBuilder()
            .select("name")
            .select("size")
            .select("price")
            .from("pizzas")
            .where("price").greaterThan(20)
            .where("price").lowerThanOrEqual(30)
            .orderBy("price", "DESC")
            .limit(5)
            .build(),

        // "SELECT a.name, b.name as 'category' FROM pizzas a, categories b WHERE a.categoryId=b.id AND b.name IN ('Neapolitan', 'Sicilian');"
        new SQLQueryBuilder()
            .select("a.name")
            .select("b.name as 'category'")
            .from("pizzas a")
            .from("categories b")
            .where("a.categoryId").equals("b.id")
            .where("b.name").in(['Neapolitan', 'Sicilian'])
            .build()
    ];

    afficherObjet(queries);
}
