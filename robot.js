class Robot {
    constructor() {
        this.directions = ["NORTH", "EAST", "SOUTH", "WEST"];
        this.x = 0;
        this.y = 0;
        this.facingIndex = 0;  // 0 -> NORTH, 1 -> EAST, 2 -> SOUTH, 3 -> WEST
    }

    move() {
        switch (this.directions[this.facingIndex]) {
            case "NORTH":
                if (this.y < 4) this.y += 1;
                break;
            case "EAST":
                if (this.x < 4) this.x += 1;
                break;
            case "SOUTH":
                if (this.y > 0) this.y -= 1;
                break;
            case "WEST":
                if (this.x > 0) this.x -= 1;
                break;
        }
    }

    rotateLeft() {
        this.facingIndex = (this.facingIndex + 3) % 4;  // Equivalent to -1 modulo 4
    }

    rotateRight() {
        this.facingIndex = (this.facingIndex + 1) % 4;
    }

    getPosition() {
        return {
            x: this.x,
            y: this.y,
            facing: this.directions[this.facingIndex],
        };
    }
}
