import FirstSVG from 'assets/sections/details/detail_first.svg';
import SecondSVG from 'assets/sections/details/detail_second.svg';
import ThirdSVG from 'assets/sections/details/detail_third.svg';

import styles from './DetailsSection.module.scss';

const DetailsSection = () => {
	return (
		<section className={styles.DetailSection}>
			<h2 className={styles.SectionHeading}>
				Join to become part of fastest growing community
				<span className={styles.SectionHeadingHighlight}> why?</span>
			</h2>
			<div className={styles.DetailsContainer}>
				<div className={styles.DetailsWrapper}>
					<div className={[styles.SVGContainer, styles.SVGLeft].join(' ')}>
						<FirstSVG />
					</div>
					<div className={styles.ContentContainer}>
						<h3 className={styles.Heading}>
							Become a better version of you,
							<span className={styles.HeadingHighlight}> Everyday!</span>
						</h3>
						<p className={styles.Para}>
							Follow AI Guided learning Recommendation, compare 1000s of
							courses. Learn only those skills that are required! Follow tips &
							sugesions to stand ahead of rat race.
						</p>
						<p className={styles.FunPartPara}>
							<span className={styles.FunPartParaHighlight}>Fun Part: </span>We
							don’t own a single paid course. Ours will be free. God promise.
						</p>
					</div>
				</div>
				<div className={styles.DetailsWrapper}>
					<div className={styles.ContentContainer}>
						<h3 className={styles.Heading}>
							Let us sort everything for you,
							<span className={styles.HeadingHighlight}> Important One!</span>
						</h3>
						<p className={styles.Para}>
							CV, Portfolio, Academics documents & your skill certificates.
							Everything will be at one place, Seriously that paper file system
							is outdated and corporate trust us.
						</p>
						<p className={styles.FunPartPara}>
							<span className={styles.FunPartParaHighlight}>Bonus: </span>
							We’ll reward you for your activities with points or vouchers.
						</p>
					</div>
					<div className={[styles.SVGContainer, styles.SVGRight].join(' ')}>
						<SecondSVG />
					</div>
				</div>
				<div className={styles.DetailsWrapper}>
					<div className={[styles.SVGContainer, styles.SVGLeft].join(' ')}>
						<ThirdSVG />
					</div>
					<div className={styles.ContentContainer}>
						<h3 className={styles.Heading}>
							Something should be surprise,
							<span className={styles.HeadingHighlight}> Signup Now!</span>
						</h3>
						<p className={styles.Para}>
							Our team of good product designers & developers are working day &
							night to introduce new features. Jobs, Interships & many more
							coming soon.
						</p>
						<p className={styles.FunPartPara}>
							<span className={styles.FunPartParaHighlight}>Secret: </span>
							We’re too excited so typed random features and now we have to work
							on random features.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DetailsSection;