player.onChat("ev", function () {
    agent.teleportToPlayer()
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < 5; index++) {
                agent.place(FORWARD)
                agent.move(FORWARD, 1)
            }
            agent.turn(RIGHT_TURN)
        }
        agent.move(UP, 1)
    }
})
