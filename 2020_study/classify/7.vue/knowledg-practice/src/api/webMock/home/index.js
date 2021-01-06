import Mock from "mockjs";
import data from "./data";
Mock.mock("/api/test", "get", data.data);
Mock.mock("/api/test2", "get", data.data2);


