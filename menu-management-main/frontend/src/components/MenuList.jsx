import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";
import { getMenus } from "../utils/api";

const MenuList = () => {
  const [activeCategory, setActiveCategory] = useState("FOOD"); 
  const [menuItems, setMenuItems] = useState([]);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get("https://dns-assessment-backend1.onrender.com/api/menus");
        console.log("Menus response:", response.data); 
        setMenus(response.data); 
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };

    fetchMenus();
  }, []);

  useEffect(() => {
    const fetchMenuItems = async () => {
      if (menus.length > 0) {
        const selectedMenu = menus.find(menu => menu.name === activeCategory); 
        if (selectedMenu) {
          try {
            const response = await axios.get(
              ` https://dns-assessment-backend1.onrender.com/api/menus/${selectedMenu._id}/items`
            );
            console.log("Fetched items:", response.data);
            setMenuItems(response.data); 
          } catch (error) {
            console.error("Error fetching menu items:", error);
          }
        } else {
          console.log(`No category found for: ${activeCategory}`);
        }
      }
    };

    fetchMenuItems();
  }, [activeCategory, menus]); 
  return (
    <div>
      {/* First Div: Menu Heading Section */}
      <div
        style={{
          width: "100%",
          height: "311px",
          backgroundImage: 'url("/f81b6208cb3da0f5ecc0f0d109ca4bd0.jpg")',
          backgroundSize: "cover",
          textAlign: "center",
          padding: "50px 0",
          color: "white",
          position: "relative",
          top: "80px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>

        <h1
          style={{
            fontSize: "75px",
            fontWeight: "600",
            textShadow: "4px 0px 3px #800020",
            position: "relative",
            zIndex: 2,
          }}
        >
          MENU
        </h1>
        <p
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          Please take a look at our menu featuring food, drinks, and brunch.
        </p>
      </div>

      {/* Second Div: Dynamic Menu Categories Section */}
      <div
        style={{
          width: "100%",
          height: "79px",
          background:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/d875fd6fec8f3801ba095cc39be0e4b1.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          position: "relative",
          top: "80px",
        }}
      >
        {menus.length > 0 ? (
          menus.map((menu) => (
            <div
              key={menu._id}
              onClick={() => setActiveCategory(menu.name)}
              style={{
                width: "114px",
                height: "50px",
                backgroundColor:
                  activeCategory === menu.name ? "#0796EF" : "black", 
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontWeight: "bold",
                border: "0.5px solid #0796EF",
                cursor: "pointer",
                textDecoration:
                  activeCategory === menu.name ? "underline" : "none",
                margin: "5px",
              }}
            >
              {menu.name}
            </div>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>

      {/* Third Div: Category-Specific Menu Section */}
      <div
        style={{
          width: "100%",
          height: "672px",
          backgroundImage: 'url("/f37f4a258b3eea846bf145fb95b71dfd.png")',
          backgroundSize: "cover",
          position: "relative",
          top: "80px",
        }}
      >
        <div
          style={{
            width: "80%",
            margin: "0 auto",
            border: "2px solid #0796EF",
            padding: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            borderRadius: "8px",
            position: "relative",
            top: "100px",
            maxHeight: "100%",
            overflowY: "auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "36px",
              marginBottom: "20px",
              textDecoration: "underline",
              textShadow: "4px 0px 3px #800020",
            }}
          >
            {activeCategory.toUpperCase()}
          </h2>

          {/* Conditional Rendering for Menu Items */}
          <div
            style={{
              fontSize: "18px",
              marginBottom: "20px",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            {menuItems.length > 0 ? (
              menuItems.map((item) => (
                <div key={item._id}>
                  <strong>{item.name}</strong> .......................... $ {item.price}
                  <p>{item.description}</p>
                </div>
              ))
            ) : (
              <p>No items available for this category.</p>
            )}
          </div>
        </div>
      </div>

      {/* Connect with Us Section */}
      <div
        style={{
          backgroundColor: "black",
          padding: "40px 0",
          position: "relative",
          top: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            padding: "20px",
          }}
        >
          {/* Contact */}
          <div
            style={{
              padding: "20px",
              border: "2px solid white",
              borderRadius: "8px",
              color: "white",
              width: "300px",
              textAlign: "center",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "#0796EF")
            }
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "500",
                letterSpacing: "0.03em",
                color: "#0796EF",
                lineHeight: "3%",
              }}
              className="pb-4 pt-3"
            >
              CONNECT WITH US
            </h3>
            <p className="">
              <i
                className="fa-solid fa-phone"
                style={{
                  color: "#FFD43B",
                  marginRight: "10px",
                }}
              ></i>
              +91 9567843340 <br />
              <i
                className="fa-regular fa-envelope"
                style={{
                  color: "#FFD43B",
                  marginRight: "10px",
                }}
              ></i>
              info@deepnetsoft.com
            </p>
          </div>

          {/* Logo and Socials */}
          <div
            style={{
              padding: "20px",
              border: "2px solid white",
              borderRadius: "8px",
              color: "white",
              width: "300px",
              textAlign: "center",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "#0796EF")
            }
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
          >
            <img
              src="/6860545013e0a63ba8cb7e94004971f7.png"
              alt="Deep Net Soft Logo"
              style={{ width: "100px", height: "50px", marginBottom: "10px" }}
            />
            <h3
              style={{
                fontSize: "35px",
                fontWeight: "400",
                letterSpacing: "0.03em",
                lineHeight: "3%",
              }}
            >
              <span style={{ color: "#0796EF" }}>DEEP</span> NET{" "}
              <span style={{ color: "#857878" }}>SOFT</span>
            </h3>
            <p className="pt-2">
              <i
                className="fa-brands fa-facebook-f"
                style={{
                  color: "#808080",
                  marginRight: "10px",
                }}
              ></i>
              <i
                className="fa-brands fa-twitter"
                style={{
                  color: "#808080",
                  marginRight: "10px",
                }}
              ></i>
              <i
                className="fa-brands fa-youtube"
                style={{
                  color: "#808080",
                  marginRight: "10px",
                }}
              ></i>
              <i
                className="fa-brands fa-instagram"
                style={{
                  color: "#808080",
                  marginRight: "10px",
                }}
              ></i>
            </p>
          </div>

          {/* Third Div: Address */}
          <div
            style={{
              padding: "20px",
              border: "2px solid white",
              borderRadius: "8px",
              color: "white",
              width: "300px",
              textAlign: "center",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "#0796EF")
            }
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "white")}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "500",
                letterSpacing: "0.03em",
                color: "#0796EF",
                lineHeight: "3%",
              }}
              className="pb-4 pt-3"
            >
              FIND US
            </h3>
            <p>
              <i
                className="fa-solid fa-location-dot"
                style={{
                  color: "#FFD43B",
                  marginRight: "10px",
                }}
              ></i>
              First floor, Geo Infopark <br />
              Infopark EXPY, Kakkanad
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MenuList;
