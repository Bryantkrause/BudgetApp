import axios from "axios";

const BudgetAPI = {
	getBudget: () => axios.get("/budget"),
	addBudget: (budget) => axios.post("/budget", budget),
	updateBudget: (id, values) => axios.put(`/budget/${id}`, values),
	deleteBudget: (id) => axios.delete(`/budget/${id}`),
};

export default BudgetAPI;
