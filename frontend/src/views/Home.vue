<template>
    <v-row align="center">
        <v-col class="text-center">

            <!-- Title -->
            <div class="my-10">
                <h1 class='display-2'>Air Crash Investigations</h1>
                <h2 class='display-1'>A Game of Ethics</h2>
            </div>

            <!-- List of Buttons -->
            <div class="my-6" v-if="$store.state.gameID && $store.state.checkpoint">
                <router-link :to="$store.state.checkpoint">
                    <v-btn x-large min-width="180" color="success">Re-Join Game</v-btn>
                </router-link>
            </div>
            <div class="my-6">
                <router-link to="/NewGame">
                    <v-btn class = 'newgame1' x-large min-width="180" color="primary">New Game</v-btn>
                </router-link>
            </div>
            <div class="my-6">
                <router-link to="/JoinGame">
                    <v-btn class = 'newgame2' x-large min-width="180" color="primary">Join Game</v-btn>
                </router-link>
            </div>
            <!-- Help Dialog -->
            <div class="my-6">
                <v-dialog v-model="helpDialog" width="600px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" x-large min-width="180">Help</v-btn>
                    </template>
                    <v-card>
                        <v-card-title class="justify-center">
                            <span class="headline">Instructions</span>
                        </v-card-title>
                        <v-card-text>
                            <p>
                                This is a round-based game. Each game will have 5 players who can choose different roles. At the beginning you can read the background of the game as well as some description about the responsibility and individual stories of every role. After every player
                                select a role, the game will start.
                            </p>
                            <p>
                                In each chapter (round), there is a particular events and context. You should make a decision based on your understanding and responsibility. Every player will see the same question and enter their preferred option. A final outcome will be decided for
                                the group, based on the combination of selections made by each role. The story of the game will be different according to the different decisions.
                            </p>
                            <p>
                                At the end of the game, you will see the conclusion and you can discuss together about what each player thought during the game
                            </p>
                            <p>Go and find your own outcome with your friends!</p>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn class = "newgame3" color="green darken-1" text @click="helpDialog = false">Got It</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>

        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            helpDialog: false,
        }
    }
};
</script>

<style>
    a {
        text-decoration:none;
    }
</style>
