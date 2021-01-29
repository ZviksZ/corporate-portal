import React from 'react'
import s from '../../../Profile.module.scss'
import { ClipboardCopy } from '../../../../../common/ClipboardCopy/ClipboardCopy'

type Props = {
	isMyProfile: boolean
	roleAdmin: boolean | null
	sshArray: string[]
}

export const ProfileInfoMainSsh: React.FC<Props> = ({ isMyProfile, roleAdmin, sshArray }) => {
	return (
		<>
			{(isMyProfile || roleAdmin) && sshArray && (
				<>
					<div className="sectionSubtitle">SSH ключ</div>

					{sshArray &&
						sshArray.map((item) => (
							<div key={item} className={s.sshBlock}>
								<span className={s.text}>ssh rsa {item}</span>
								<ClipboardCopy isBigIcon={true} text={'ssh rsa ' + item} />
							</div>
						))}
				</>
			)}
		</>
	)
}
