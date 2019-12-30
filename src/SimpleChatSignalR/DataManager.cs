using System;
using System.Collections.Generic;

namespace SimpleChatSignalR
{
    public class DataManager
    {
        public static List<ChatModel> GetData()
        {
            var r = new Random();
            return new List<ChatModel>()
            {
                new ChatModel { Data = new List<int> { r.Next(1, 40) }, Label = "Data1" },          
                new ChatModel { Data = new List<int> { r.Next(1, 40) }, Label = "Data2" },
                new ChatModel { Data = new List<int> { r.Next(1, 40) }, Label = "Data3" }, 
                new ChatModel { Data = new List<int> { r.Next(1, 40) }, Label = "Data4" }
            };
        }
    }
}