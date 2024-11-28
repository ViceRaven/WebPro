/** @type {{ exercises: Exercise[] }} */
const data = require("../data/exercises.json");
const { getConnection } = require("./supabase");
const conn = getConnection();


/**
 * @template T
 * @typedef {import("../../Client/src/models/dataEnvelope").DataEnvelope} DataEnvelope
 * @typedef {import("../../Client/src/models/dataEnvelope").DataListEnvelope} DataListEnvelope
 */

/**
 * @typedef {import("../../Client/src/models/exercise").Exercise} Exercise
 */

/**
 * Get all exercises
 * @returns {Promise<DataListEnvelope<Exercise>>}
 */
async function getAll() {
    const { data, error, count } = await conn
        .from("exercises")
        .select("*", { count: "estimated" }); //* means get all the data in that field
    return {
    isSuccess: !error,
    message: error?.message,
    data: data,
    total: count,
    };
}

/**
 * Get an exercise by id
 * @param {number} id
 * @returns {Promise<DataEnvelope<Exercise>>}
 */
async function get(id) {
    const { data, error } = await conn.from("exercises").select("*").eq("id", id);
    return {
    isSuccess: !error,
    message: error?.message,
    data: data,
    };
}

/**
 * Add a new exercise
 * @param {Exercise} exercises
 * @returns {Promise<DataEnvelope<Exercise>>}
 */
async function add(exercises) {
    exercises.id = data.exercises.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1;
    data.items.push(exercises);
    return {
        isSuccess: true,
        data: exercises,
    };
}

/**
 * Update an exercise
 * @param {number} id
 * @param {Exercise} exercises
 * @returns {Promise<DataEnvelope<Exercise>>}
 */
async function update(id, exercises) {
    const exerciseToUpdate = await get(id);
    Object.assign(exerciseToUpdate.data, exercises);
    return {
        isSuccess: true,
        data: exerciseToUpdate.data,
    };
}

/**
 * Remove an exercise
 * @param {number} id
 * @returns {Promise<DataEnvelope<number>>}
 */
async function remove(id) {
    const itemIndex = data.exercises.findIndex((exercises) => exercises.id == id);
    if (itemIndex === -1)
        throw { isSuccess: false, message: "Exercise not found", data: id };
    data.items.splice(itemIndex, 1);
    return { isSuccess: true, message: "Exercise deleted", data: id };
}


module.exports = {
    getAll,
    get,
    add,
    update,
    remove,
};
