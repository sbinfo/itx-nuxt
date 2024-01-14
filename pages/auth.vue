<script lang="ts" setup>
definePageMeta({
    layout: "auth"
})

import { ref } from "vue"
import { ID, account } from "~/utils/appwrite"

const loggedInUser = ref<any>(null)
const isLoginPage = ref(true)

const email = ref("")
const password = ref("")
const name = ref("")

const login = async () => {
    await account.createEmailSession(email.value, password.value)
    loggedInUser.value = await account.get()
}

const register = async () => {
    await account.create(ID.unique(), email.value, password.value, name.value)
    await login()
}

</script>

<template>
    <div class="h-screen flex justify-center align items-center">
        <form
            class="flex flex-wrap justify-center w-96 bg-accent p-6 rounded-lg mb-16"
            @click.prevent
        >
            <h1 class="text-xl mb-4">
                {{ isLoginPage ? "Login" : "Registration" }}
            </h1>
            <input
                v-model="email"
                type="email"
                placeholder="Email"
                class="input input-sm input-bordered w-full mb-5"
            />
            <input
                v-model="password"
                type="password"
                placeholder="Password"
                class="input input-sm input-bordered w-full mb-5"
            />
            <input
                v-if="!isLoginPage"
                v-model="name"
                type="text"
                placeholder="Name"
                class="input input-sm input-bordered w-full mb-5"
            />
            <button
                v-if="isLoginPage"
                class="btn btn-primary btn-wide w-full btn-sm mb-1"
                @click="login"
            >
                Login
            </button>
            <button
                v-else
                class="btn btn-primary btn-wide w-full btn-sm mb-1"
                @click="register"
            >
                Registration
            </button>
            <div class="w-full flex nowrap items-center justify-between text-sm">
                {{ isLoginPage ? "You don't have an account?" : "You already have an account?" }}
                <button
                    class="btn btn-secondary btn-link p-0"
                    @click="isLoginPage = !isLoginPage"
                >
                    {{ isLoginPage ? "Registration" : "Login" }}
                </button>
            </div>
        </form>
    </div>
</template>
