/**
 * BiDimensional Array to draw the map
 * Each number corresponds to a specific tile, eg 1 ==> Tile_1.png
 * It is like a tile wall, we can easily see there is a drawing in it
 * 
 * 0 (zero) correspond to an empty space (without tiles)
 * 
 * This map was generated using "Tiled"
 */
const levelMap = [
    [ 9,  9,  9,  9, 13,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [15, 15, 16,  0,  0,  0,  0,  0,  0,  0,  0,  1,  2,  2],
    [ 0,  0,  0,  0, 14, 15, 15, 16,  0,  0,  0, 12,  9,  9],
    [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 2,  2,  3,  0,  0,  0,  0,  1,  2,  3,  0,  0,  0,  0],
    [ 5,  5,  6,  0,  0,  0,  0,  4,  5, 10, 11,  2,  3,  0],
    [ 5,  5,  6,  0,  1,  2,  7,  8,  5,  5,  5,  5,  6,  0]
];

/**
 * Additional objects with dimensions different from all the tiles.
 * These objects will have specific positions in the game area.
 */
const levelObjects = {
    1: {imageSrc: 'Sign', x:30, y:164},
    2: {imageSrc: 'Crate', x:170, y:150},
    3: {imageSrc: 'Crate', x:270, y:150},
    4: {imageSrc: 'Bush_1', x:30, y:555},
    5: {imageSrc: 'TombStone_1', x:70, y:585},
    6: {imageSrc: 'TombStone_2', x:200, y:565},
    7: {imageSrc: 'TombStone_2', x:720, y:820},
    8: {imageSrc: 'TombStone_1', x:640, y:840},
    9: {imageSrc: 'TombStone_2', x:1150, y:565},
    10: {imageSrc: 'TombStone_1', x:1200, y:585},
    11: {imageSrc: 'TombStone_1', x:1300, y:715},
    12: {imageSrc: 'TombStone_1', x:1730, y:200},
    13: {imageSrc: 'Bush_2', x:1530, y:195},
    14: {imageSrc: 'TombStone_2', x:1500, y:180},
    15: {imageSrc: 'Crate', x:790, y:790},
    16: {imageSrc: 'Bush_2', x:700, y:325},
    17: {imageSrc: 'Bush_2', x:1000, y:580},
    18: {imageSrc: 'ArrowSign', x:900, y:555},
    19: {imageSrc: 'Bush_1', x:1440, y:680},
    23: {imageSrc: 'DeadBush', x:910, y:310},
    21: {imageSrc: 'Skeleton', x:550, y:335},
    22: {imageSrc: 'Skeleton', x:550, y:850},
    20: {imageSrc: 'Tree', x:650, y:147},
    24: {imageSrc: 'Bone_1', x:950, y:860},    
    25: {imageSrc: 'Bone_1', x:130, y:650},    
    26: {imageSrc: 'Bone_2', x:50, y:860},
    27: {imageSrc: 'Bone_2', x:1500, y:300},
    28: {imageSrc: 'Bone_3', x:1500, y:800},
    29: {imageSrc: 'Bone_3', x:1100, y:700},
    30: {imageSrc: 'Bone_3', x:650, y:900},
    31: {imageSrc: 'Bone_4', x:1650, y:350},
    32: {imageSrc: 'Bone_4', x:30, y:700},
    33: {imageSrc: 'Bone_4', x:180, y:850},
    34: {imageSrc: 'Bone_4', x:1250, y:850},
};

const baddiesMap = [
    [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 0,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0],
    [ 0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0,  0,  0],
    [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0,  0,  0,  0],
    [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  0,  0],
    [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
];