player.onChat("ev", function () {
    agent.teleportToPlayer()
    for (let index = 0; index < 5; index++) {
        for (let x = 0; x <= 4; x++) {
            for (let z = 0; z <= 4; z++) {
                if (x == 0 || x == 4 || z == 0 || z == 4) {
                    agent.place(FORWARD)
                }
                agent.move(FORWARD, 1)
            }
            agent.turn(RIGHT_TURN)
        }
        agent.move(UP, 1)
    }
})
