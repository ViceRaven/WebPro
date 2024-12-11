

import { NavLink as RouterLink } from 'react-router-dom'
const FlyoutPanel = ({ isOpen, children }: { isOpen: boolean, children: JSX.Element }) => (
  <div>{isOpen && children}</div>
);
const ShoppingCart = () => <div>Cart</div>
const LoginBadge = () => <div>Log in</div>

const isOpen = ref(false)
const isCartOpen = ref(false)


export default function NavBar() {
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          :class="{ 'is-active': isOpen }"
          @click="isOpen = !isOpen"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isOpen }">
        <div class="navbar-start">
          <RouterLink to="/" class="navbar-item">Home</RouterLink>
          <RouterLink to="/products" class="navbar-item">Shop</RouterLink>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> More </a>

            <div class="navbar-dropdown">
              <RouterLink to="/about" class="navbar-item"> About </RouterLink>
              <RouterLink to="/jobs" class="navbar-item"> Jobs </RouterLink>
              <RouterLink to="/contact" class="navbar-item"> Contact </RouterLink>
              <hr class="navbar-divider" />
              <a class="navbar-item"> Report an issue </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <LoginBadge />
              <button
                class="button is-warning is-light is-active"
                :class="{ 'is-focused': isCartOpen }"
                @click="isCartOpen = !isCartOpen"
              >
                <span class="icon">
                  <i class="fas fa-shopping-cart"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <FlyoutPanel :is-open="isCartOpen">
    <ShoppingCart />
  </FlyoutPanel>



