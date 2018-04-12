import axios from "axios";

export default {
  // Gets all lists
  getLists: function() {
    return axios.get("/api/lists");
  },
  // Gets the list with the given id
  getListDetail: function(id) {
    return axios.get("/api/lists/" + id);
  },
  // Deletes the list with the given id
  deleteList: function(id) {
    return axios.delete("/api/lists/" + id);
  },
  // Saves a list to the database
  saveList: function(listData) {
    return axios.post("/api/lists", listData);
  },
  // Deletes a list item
  deleteListItem: function(id) {
    return axios.delete("/api/listItem/" + id);
  },
  // Saves a list item to the database
  saveListItem: function(listItemData) {
    return axios.post("/api/listItem", listItemData);
  }
};
