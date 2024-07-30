import { Router } from "express"
import { favTipController } from "../controllers/favTipController.js"

export const favTipRoutes = () => {
    const favTipRouter = Router()
    const { markAsFavorite, getAllFavoriteTips } = favTipController()

    favTipRouter.route('/tip-fav')
        .post(markAsFavorite)
        .get(getAllFavoriteTips)

    return favTipRouter
}