import { StrudentQueryType } from "@/type/student";
import request from "@/utils/request";
import qs from "qs"
export async function getStudentList(params?:StrudentQueryType) {
  return request.get(
        `http://127.0.0.1:8881/student/list?${qs.stringify(
            params
        )}`
        )

}