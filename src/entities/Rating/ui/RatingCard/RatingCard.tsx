import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import cls from './RatingCard.module.scss';
import { Button, SizeButton, ThemeButton } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;

}
export const RatingCard = memo((props: RatingCardProps) => {
    const { t } = useTranslation('articledetails');
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');
    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);
    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input placeholder={t('Оставьте свой отзыв!')} />
        </>
    );
    return (
        <Card className={classNames(cls.RatingCard, {}, [className])}>
            <VStack justify="center" max>
                <Text
                    className={cls.RatingCardText}
                    align={TextAlign.CENTER}
                    title={starsCount ? t('Спасибо за оценку!') : title}
                    size={TextSize.L}
                />
                <StarRating
                    className={cls.RatingCardRate}
                    size={40}
                    selectedStars={starsCount}
                    onSelect={onSelectStars}
                />
            </VStack>
            <BrowserView>
                <Modal className={cls.RatingCardModal} isOpen={isModalOpen} lazy>
                    <VStack max gap="32">
                        {modalContent}
                        <HStack max gap="32" justify="end">
                            <Button theme={ThemeButton.OUTLINE_RED} onClick={cancelHandle}>
                                {t('Закрыть')}
                            </Button>
                            <Button theme={ThemeButton.OUTLINE_RED} onClick={acceptHandle}>
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
                    <VStack gap="32">
                        {modalContent}
                        <Button fullWidth onClick={acceptHandle} size={SizeButton.L}>
                            {t('Отправить')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});
