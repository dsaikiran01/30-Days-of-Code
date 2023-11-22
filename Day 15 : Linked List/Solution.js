function Node(data){
    this.data=data;
    this.next=null;
}

function Solution(){
	this.insert=function(head,data){
          var node = new Node(data);
          if(head == null) {
              head = node;
          } else {
              var current = head;
              while(current.next) {
                  current = current.next;
              }
              current.next = node;   
          }
          return head;
    };

	this.display=function(head){
        var start=head;
            while(start){
                process.stdout.write(start.data+" ");
                start=start.next;
            }
    };
}

function main(){
    var T=parseInt(readLine());
    var head=null;
    var mylist=new Solution();
    for(i=0;i<T;i++){
        var data=parseInt(readLine());
        head=mylist.insert(head,data);
    }
    mylist.display(head);
}

main();
