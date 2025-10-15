import Dexie, { type Table } from "dexie";

export interface Setting { key: string; value: unknown }
export interface Scenario {
  id?: number;
  name: string;
  data: any;
  createdAt: number;
  updatedAt: number;
}

class SynesisDB extends Dexie {
  settings!: Table<Setting, string>;
  scenarios!: Table<Scenario, number>;

  constructor() {
    super("synesis_db");
    this.version(1).stores({ settings: "key" });
    this.version(2).stores({ settings: "key", scenarios: "++id,name,updatedAt" });
  }
}

export const db = new SynesisDB();

// settings helpers
export const saveSetting = (k: string, v: unknown) => db.settings.put({ key: k, value: v });
export const loadSetting = async <T>(k: string, fallback: T) =>
  ((await db.settings.get(k))?.value as T) ?? fallback;

// scenarios helpers
export async function addScenario(name: string, data: any) {
  const now = Date.now();
  return db.scenarios.add({ name, data, createdAt: now, updatedAt: now });
}
export const listScenarios = () => db.scenarios.orderBy("updatedAt").reverse().toArray();
export const getScenario = (id: number) => db.scenarios.get(id);
export const deleteScenario = (id: number) => db.scenarios.delete(id);
