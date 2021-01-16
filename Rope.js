class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.rope=Constraint.create(options);
        this.pointB=pointB
        World.add(world,this.rope);
    }
    display(){
        var PointA=this.rope.bodyA.position
        var pointB=this.pointB
        strokeWeight(0)
        line(PointA.x,PointA.y,pointB.x,pointB.y)
    }
}