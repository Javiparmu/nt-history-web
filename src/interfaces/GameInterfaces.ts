export interface Game {
    runId:         string;
    character:     string;
    lastHit:       string;
    world:         string;
    worldLevel:    number;
    crown:         string;
    weaponA:       string;
    weaponB:       string;
    skin:          string;
    ultraMutation: string;
    characterLvl:  number;
    loops:         number;
    win:           boolean;
    mutations:     string[];
    kills:         number;
    health:        number;
    steamId:       string;
    type:          string;
    timestamp:     number;
}
