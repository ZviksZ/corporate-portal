import * as React from 'react'
import copy from '../../../assets/images/icons/copy.svg'
import { copyTextToClipboard } from '../../../services/helpers/utils'
import { Popover, Tooltip } from '@material-ui/core'
import cn from 'classnames'
import s from './ClipboardCopy.module.scss'

type Props = {
	text: string
	isBigIcon?: boolean
}

export const ClipboardCopy: React.FC<Props> = ({ text, isBigIcon = false }) => {
	const [anchorEl, setAnchorEl] = React.useState<HTMLImageElement | null>(null)

	const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
		event.stopPropagation()
		event.preventDefault()

		setAnchorEl(event.currentTarget)
		copyTextToClipboard(event)

		setTimeout(() => {
			setAnchorEl(null)
		}, 1200)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const open = Boolean(anchorEl)
	const id = open ? 'simple-popover' : undefined

	return (
		<>
			<Tooltip title="Скопировать текст" aria-describedby={id}>
				<img className={cn(s.copyIcon, { [s.copyIconBig]: isBigIcon })} src={copy} alt="" data-copy={text} onClick={handleClick} />
			</Tooltip>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				<div className="container">
					<p className={s.copyText}>Текст скопирован в буфер обмена</p>
				</div>
			</Popover>
		</>
	)
}
