
        // Menu data with realistic pizza images
        const menuItems = [
            {
                id: 1,
                name: "Margherita Classic",
                description: "Fresh mozzarella, tomato sauce, basil, and olive oil",
                price: 14.99,
                image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 2,
                name: "Pepperoni Supreme",
                description: "Pepperoni, mozzarella cheese, and our signature sauce",
                price: 16.99,
                image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 3,
                name: "Vegetarian Delight",
                description: "Bell peppers, mushrooms, onions, olives, and fresh tomatoes",
                price: 15.99,
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 4,
                name: "Meat Lovers",
                description: "Pepperoni, sausage, ham, bacon, and ground beef",
                price: 19.99,
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 5,
                name: "Hawaiian Paradise",
                description: "Ham, pineapple, and mozzarella cheese",
                price: 17.99,
                image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 6,
                name: "BBQ Chicken",
                description: "Grilled chicken, BBQ sauce, red onions, and cilantro",
                price: 18.99,
                image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 7,
                name: "Four Cheese",
                description: "Mozzarella, cheddar, parmesan, and gorgonzola",
                price: 16.99,
                image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            },
            {
                id: 8,
                name: "Spicy Italian",
                description: "Spicy salami, jalapeños, hot sauce, and mozzarella",
                price: 17.99,
                image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            }
        ];

        let cart = [];

        // Populate menu
        function populateMenu() {
            const menuGrid = document.getElementById('menu-grid');
            menuGrid.innerHTML = '';

            menuItems.forEach(item => {
                const menuItemDiv = document.createElement('div');
                menuItemDiv.className = 'menu-item';
                menuItemDiv.innerHTML = `
                    <div class="item-image" style="background-image: url('${item.image}')"></div>
                    <div class="item-content">
                        <h3 class="item-name">${item.name}</h3>
                        <p class="item-description">${item.description}</p>
                        <div class="item-footer">
                            <span class="item-price">${item.price}</span>
                            <button class="add-btn" onclick="addToCart(${item.id})">Add to Cart</button>
                        </div>
                    </div>
                `;
                menuGrid.appendChild(menuItemDiv);
            });
        }

        // Add to cart
        function addToCart(itemId) {
            const item = menuItems.find(i => i.id === itemId);
            const existingItem = cart.find(i => i.id === itemId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...item, quantity: 1 });
            }

            updateCartCount();
            showAddedToCartAnimation();
        }

        // Update cart count
        function updateCartCount() {
            const count = cart.reduce((total, item) => total + item.quantity, 0);
            document.getElementById('cart-count').textContent = count;
        }

        // Show added to cart animation
        function showAddedToCartAnimation() {
            const cartBtn = document.querySelector('.cart-btn');
            cartBtn.style.transform = 'scale(1.1)';
            setTimeout(() => {
                cartBtn.style.transform = 'scale(1)';
            }, 200);
        }

        // Open cart modal
        function openCart() {
            const modal = document.getElementById('cart-modal');
            const cartItemsDiv = document.getElementById('cart-items');
            const cartTotalDiv = document.getElementById('cart-total');

            cartItemsDiv.innerHTML = '';

            if (cart.length === 0) {
                cartItemsDiv.innerHTML = '<p style="text-align: center; color: #666;">Your cart is empty</p>';
                cartTotalDiv.textContent = 'Total: $0.00';
            } else {
                let total = 0;
                cart.forEach(item => {
                    const itemTotal = item.price * item.quantity;
                    total += itemTotal;

                    const cartItemDiv = document.createElement('div');
                    cartItemDiv.className = 'cart-item';
                    cartItemDiv.innerHTML = `
                        <div>
                            <strong>${item.name}</strong><br>
                            <small>$${item.price} x ${item.quantity}</small>
                        </div>
                        <div>
                            <button onclick="removeFromCart(${item.id})" style="background: #d32f2f; color: white; border: none; border-radius: 5px; padding: 5px 10px; cursor: pointer;">Remove</button>
                        </div>
                    `;
                    cartItemsDiv.appendChild(cartItemDiv);
                });

                cartTotalDiv.textContent = `Total: $${total.toFixed(2)}`;
            }

            modal.style.display = 'block';
        }

        // Close cart modal
        function closeCart() {
            document.getElementById('cart-modal').style.display = 'none';
        }

        // Remove from cart
        function removeFromCart(itemId) {
            cart = cart.filter(item => item.id !== itemId);
            updateCartCount();
            openCart(); // Refresh cart display
        }

        // Checkout
        function checkout() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }

            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            alert(`Thank you for your order! Total: $${total.toFixed(2)}\n\nYour delicious pizza will be delivered in 30-45 minutes!`);
            
            cart = [];
            updateCartCount();
            closeCart();
        }

        // Scroll to menu
        function scrollToMenu() {
            document.getElementById('menu').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('cart-modal');
            if (event.target == modal) {
                closeCart();
            }
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            populateMenu();
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }
        });