import { toast } from "react-toastify";

export const instantSucess = (msg) => {
  return toast.success(msg)
}

export const instantWarn = (msg) => {
  return toast.warn(msg)
}

export const instantError = (msg) => {
  return toast.error(msg)
}