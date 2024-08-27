class Grid {
    constructor(size) {
        this.size = size;
        this.gridElement = document.getElementById('grid');
        this.renderGrid();
    }

    renderGrid() {
        this.gridElement.innerHTML = '';
        for (let y = this.size - 1; y >= 0; y--) {
            for (let x = 0; x < this.size; x++) {
                const cell = document.createElement('div');
                cell.className = 'grid-cell';
                cell.id = `cell-${x}-${y}`;
                this.gridElement.appendChild(cell);
            }
        }
    }

    updateGrid(robotPosition) {
        this.renderGrid();
        const { x, y, facing } = robotPosition;
        const robotCell = document.getElementById(`cell-${x}-${y}`);
        robotCell.innerHTML = facing.charAt(0);
        robotCell.style.backgroundColor = '#87CEEB';
    }
}
