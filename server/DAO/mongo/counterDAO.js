import Counter from "./../../models/counter";

export function incrementCounter(data) {
    let { entity } = data;
    return Counter.findOneAndUpdate(
        { "entity": entity }, 
        { "$inc": { "count": 1 } }, 
        { "new": true, "upsert": true }
    );
};