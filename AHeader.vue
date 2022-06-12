<template>
  <header class="border-b border-gray-200 dark:border-gray-700 md:text-sm">
    <div class="container h-full">
      <div class="h-full flex">
        <div class="h-full py-3 w-24">
          <router-link :to="{ name: 'home' }" class="block h-full">
            <ALogo class="h-full" />
          </router-link>
        </div>
        <nav
          :class="{ hidden }"
          class="fixed top-16 left-0 right-0 bottom-0 z-50 bg-white py-4 w-full md:static md:h-full md:flex md:bg-transparent md:py-0"
        >
          <ul class="md:flex md:h-full md:ml-auto md:mr-auto">
            <li>
              <router-link :to="{ name: 'terms-of-use' }">Conditions d'utilisation</router-link>
            </li>
          </ul>
          <ul v-if="loggedIn" class="md:flex md:h-full">
            <li>
              <router-link :to="{ name: 'changelog' }">Changelog</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'documents' }">Documents</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'press' }">Presse</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'administration' }">Administration</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'profile' }">Profil</router-link>
            </li>
          </ul>
          <ul class="md:flex md:h-full">
            <li v-if="loggedIn" class="k-button">
              <button @click="logout" class="w-full text-left md:w-auto md:text-center">
                <AIcon :icon="icons.signOut" inline />
                <span class="md:hidden ml-1.5">Déconnexion</span>
              </button>
            </li>
            <li v-else class="k-button">
              <router-link :to="{ name: 'login' }">
                <AIcon :icon="icons.lockSimple" class="mr-1.5" inline />
                Connexion
              </router-link>
            </li>
          </ul>
        </nav>
        <button
          :style="{ touchAction: 'manipulation' }"
          class="toggle md:hidden text-2xl h-full flex ml-auto focus:outline-none"
          @click="toggleNav"
        >
          <AIcon :icon="icons.list" class="my-auto" />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header nav li {
  @apply px-6 md:px-0 md:my-auto;
}

header nav li a,
header nav li button {
  @apply block py-2 md:mx-1 md:py-0 md:px-2 border-b border-gray-200 md:border md:border-transparent text-gray-500 dark:text-gray-400 whitespace-nowrap dark:border-gray-800;
}

header nav li.k-button a,
header nav li.k-button button {
  @apply md:font-medium block py-2 md:px-2.5 md:text-white md:h-10 md:flex md:items-center md:rounded-md md:ml-3 mr-0 md:bg-black md:dark:bg-white md:dark:text-black md:h-8;
}

header nav li a.router-link-active {
  @apply text-black dark:text-white;
}

header nav li.k-button a.router-link-active {
  @apply md:text-black md:bg-white md:dark:bg-black md:border md:border-black dark:md:text-white dark:md:border-white;
}
</style>
