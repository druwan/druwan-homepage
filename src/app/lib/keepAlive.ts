import { supabase } from './supabaseClient';

async function fetchHistoricalEvent(): Promise<string> {
  try {
    const now = new Date();
    const month = now.getUTCMonth() + 1;
    const day = now.getUTCDate();

    const response = await fetch(
      `https://today.zenquotes.io/api/${month}/${day}`
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    const events = data.data.Events || [];
    if (events.length === 0) {
      return 'No historical events found for today. Keeping the database awake anyway! 😴';
    }

    // Select random event from list
    const randomIdx = Math.floor(Math.random() * events.length);
    const event = events[randomIdx];
    return `On this day in ${event.text.split(' &#8211; ')[0]}: ${
      event.text.split(' &#8211; ')[1]
    }`;
  } catch (error) {
    console.error('Error fetching historical event:', error);
    return 'Failed to fetch historical event. Keeping the database awake anyway! 😴';
  }
}

export async function keepAlive() {
  try {
    const message = await fetchHistoricalEvent();

    // Insert a new log entry
    const { error: insertError } = await supabase
      .from('keep_alive')
      .insert([{ message }]);

    if (insertError) {
      console.error('Error inserting keep alive', insertError);
      return { success: false, error: insertError };
    }

    const { data: selectData, error: selectError } = await supabase
      .from('keep_alive')
      .select('*')
      .order('timestamp', { ascending: false })
      .limit(1);

    if (selectError) {
      console.error('Error querying keep alive:', selectError);
      return { success: false, error: selectError };
    }
    return { success: true, data: selectData };
  } catch (error) {
    console.error('Unexpected error in keep alive:', error);
    return { success: false, error };
  }
}
