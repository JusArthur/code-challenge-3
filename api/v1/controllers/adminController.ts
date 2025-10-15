import { Request, Response, NextFunction } from 'express';
import { auth } from '../../../config/firebaseConfig';
import { HTTP_STATUS } from "../../../constants/httpConstants"
import { successResponse } from '../models/responseModel';

/**
 * Handles setting roles (custom claims in Firebase) for a user
 * @param req - The request object
 * @param res - The response object
 * @param next - The next middleware function
 */
export const setCustomClaims = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { uid, roles } = req.body;

        await auth.setCustomUserClaims(uid, roles);

        res.status(HTTP_STATUS.OK).json(
            successResponse({}, `Custom claims (roles) set for user: ${uid}`)
        );
    } catch (error: unknown) {
        next(error);
    }
};
