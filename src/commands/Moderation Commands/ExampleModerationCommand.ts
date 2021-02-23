import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class ExampleModerationCommand extends Command {
  public constructor() {
    super("mod", {
      aliases: ["mod"],
      category: "Moderation Commands",
      description: {
        content: "This command is an example to demonstrate that only moderators can use this command.",
        usage: "mod",
        examples: ["!mod"],
      },
      ratelimit: 3,
      userPermissions: ["MANAGE_MESSAGES"],
    });
  }

  public exec(message: Message): void {
    message.util.send(`The author of the message is <@${message.author.id}>, which is an admin on this server`)
  }
}
