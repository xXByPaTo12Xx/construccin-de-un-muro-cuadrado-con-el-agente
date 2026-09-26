def on_on_chat():
    agent.teleport_to_player()
    for index in range(5):
        for x in range(5):
            for z in range(5):
                if x == 0 or x == 4 or z == 0 or z == 4:
                    agent.place(FORWARD)
                agent.move(FORWARD, 1)
            agent.turn(RIGHT_TURN)
        agent.move(UP, 1)
player.on_chat("ev", on_on_chat)
