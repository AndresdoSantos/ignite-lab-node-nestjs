import { randomUUID } from 'node:crypto';

import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      category: 'category',
      content: new Content('content'),
      recipientId: randomUUID(),
    });

    expect(notification).toBeTruthy();
  });
});
