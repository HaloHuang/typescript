type MessageType = 'image' | 'audio' | string; 
type Message = {
    id: number,
    type: MessageType,
    sendMessage: string,
}
let messages: Message[] =[
    {id: 1, type: 'image', sendMessage: '这是id为1的消息'},
    {id: 2, type: 'audio', sendMessage: '这是id为2消息'},
    {id: 3, type: 'audio', sendMessage: '这是id为3的消息'},
    {id: 4, type: 'image', sendMessage: '这是id为4的消息'},
    {id: 5, type: 'image', sendMessage: '这是id为5的消息'},
] 

// 获取消息函数(传入数字则返回一条消息，传入类型则返回多条消息的数组)
function getMessage(value: number | MessageType): Message | undefined | Message[] {
    if(typeof value === "number") {
       return messages.find(item => item.id === value);
    }else{
      return  messages.filter(item => item.type === value);
    }
}
let msgArray = <Message[]>getMessage('audio');
console.log(msgArray);
let msg = (<Message>getMessage(1)).sendMessage;
console.log(msg);