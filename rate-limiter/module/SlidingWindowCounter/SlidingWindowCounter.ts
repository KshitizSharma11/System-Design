export default class SlidingWindowCounter {

    private maxRequests: number;
    private windowSize: number;
    private curWin: number;
    private prevWin: number;
    private curWinStartTime: number;
    private requestCount: number;

    constructor(maxRequests: number, windowSizeInSeconds: number) {
        this.maxRequests = maxRequests;
        this.windowSize = windowSizeInSeconds;
        this.curWin = 0;
        this.prevWin = 0;
        this.curWinStartTime = Math.floor(Date.now() / 1000);
 
    }

    public isAllowed(): boolean {
        const currentTime = Date.now() ;
        const elapsedTime = currentTime - this.curWinStartTime;

        if (elapsedTime >= this.windowSize) {
            // Move to the next window
            this.prevWin = this.curWin;
            this.curWin = 0;
            this.curWinStartTime = currentTime;
          
        }

        
        const weight = (this.windowSize - elapsedTime) / this.windowSize;
        const effectiveCount = this.curWin + Math.floor(this.prevWin * weight);

        if (effectiveCount < this.maxRequests) {
            this.curWin++;
            this.requestCount++;
            return true; 
        } else {
            return false; 
        }
    }

   

}