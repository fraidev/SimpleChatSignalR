using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace SimpleChatSignalR.Hubs
{
    public class ChatHub: Hub
    {
        public async Task NewMessage(string user, string message)
        {
            await Clients.All.SendAsync("messageReceived", user, message);
        }
    }
}