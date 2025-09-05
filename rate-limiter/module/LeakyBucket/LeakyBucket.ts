export default class LeakyBucket {

    private capacity: number;
    private leakRate: number;
    private waterLevel: number;
    private lastLeakTime: number;

    constructor(capacity: number, leakRate: number) {
        this.capacity = capacity;
        this.leakRate = leakRate; 
        this.waterLevel = 0;
        this.lastLeakTime = Date.now();
    }
     private leak(){
     const now = Date.now();
     const elapsed = now - this.lastLeakTime
     const leakedWater = (elapsed * this.leakRate)/1000;
     const water = Math.max(0,this.waterLevel-leakedWater);
     this.waterLevel = water;
     this.lastLeakTime = now;

     }
    public isAllowed(): boolean {
        this.leak();
        if (this.waterLevel < this.capacity) {
            this.waterLevel++;
            return true;
        }
        return false;
    }

}