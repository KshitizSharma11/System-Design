export default class TokenBucket{

   private  refill:number;
   private capacity:number;
   private current:number;
   private lastChecked:number;

    constructor(refill:number,capacity:number){
        this.refill=refill;
        this.capacity=capacity;
        this.current=capacity;
        this.lastChecked=Date.now();
    }

    private refillTokens():void{
        const now=Date.now();
        const delta=now-this.lastChecked;
        this.lastChecked=now;
        const tokensToAdd=Math.floor(delta*this.refill/1000);
        this.current=Math.min(this.current+tokensToAdd,this.capacity);
    }

      public tryRemoveToken(): boolean {
        this.refillTokens();

    if (this.current >= 1) {
      this.current -= 1;
      return true; 
    }

    return false; 
  }

}